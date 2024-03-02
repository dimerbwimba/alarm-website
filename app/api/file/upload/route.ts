import { NextResponse } from "next/server";
import path from "path";
import { writeFile, access } from "fs/promises";
import { getServerSession } from "next-auth";
import Rapport from "@/models/rapport.model";
import { connectToMongoDB } from "@/lib/mongodb";

connectToMongoDB()
// Define the POST handler for the file upload
export const POST = async (req: Request) => {
  // Parse the incoming form data
  const formData = await req.formData();

  // Get the file from the form data
  const file = formData.get("file");
  const file_name = formData.get("file_name");
  const full_file_title = formData.get("full_file_title");
  const file_description = formData.get("file_description");
  const file_type = formData.get("file_type");
  const file_size =formData.get("file_size");

  // Check if a file is received
  if (!file) {
    // If no file is received, return a JSON response with an error and a 400 status code
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  // Convert the file data to a Buffer
  const buffer = Buffer.from(await (file as Blob).arrayBuffer());

  // Replace spaces in the file name with underscores
  const filename = (file as File).name.replace(/ /g, "_");

  try {
    // Check if the file already exists in the specified directory
    await access(path.join(process.cwd(), "public/rapport/" + filename));

    // If the file exists, return a JSON response with an error and a 400 status code
    return NextResponse.json({ error: "File already exists." }, { status: 400 });
  } catch (error) {
    // If the file does not exist, continue with writing the file
  }

  try {
    const session = await getServerSession()
    if (session) {
    // Write the file to the specified directory (public/assets) with the modified filename
    await writeFile(
      path.join(process.cwd(), "public/rapport/" + filename),
      buffer
    );

    const FileData = {
      file_name,
      full_file_title,
      file_description,
      file_type,
      file_size,
      file_path:"/rapport/" + filename
    }

    const newFile = await Rapport.create(FileData)
    // Return a JSON response with a success message and a 201 status code
    return NextResponse.json({newFile, Message: "Success",  status: 201 });
    }
  } catch (error) {
    // If an error occurs during file writing, log the error and return a JSON response with a failure message and a 500 status code
    console.log("Error occurred ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { getBoundary, parse } from "parse-multipart-data";
import { v4 as uuidv4 } from "uuid";

const client = new S3Client();
const BUCKET_NAME = process.env.BUCKET_NAME as string;

const base64ToBuffer = (base64String: string) => {
  return Buffer.from(base64String, "base64");
};

type Data = {
  [key: string]: unknown;
};

export const handler = async (event: APIGatewayProxyEventV2) => {
  if (!event.body) return;
  const parts = parse(
    base64ToBuffer(event.body),
    getBoundary(event.headers["content-type"] || "")
  );
  const data: Data = {};
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    data[part.name as keyof Data] = part.data;
  }
  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: uuidv4(),
    Body: data.file as Buffer,
  });
  const response = await client.send(command);
  console.log(response);
};

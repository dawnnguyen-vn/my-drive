import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { getBoundary, parse } from "parse-multipart-data";
import { z } from "zod";

class Response {
  private statusCode: number;
  private message: string;

  public constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

const client = new S3Client();
const BUCKET_NAME = process.env.BUCKET_NAME as string;

const base64ToBuffer = (base64String: string) => {
  return Buffer.from(base64String, "base64");
};

const File = z.object({
  filename: z.string(),
  type: z.string(),
  data: z.instanceof(Buffer),
});

export const handler = async (event: APIGatewayProxyEventV2) => {
  if (!event.body) return;
  const parts = parse(
    base64ToBuffer(event.body),
    getBoundary(event.headers["content-type"] || "")
  );

  const fileSchema = File.safeParse(parts[0]);
  if (fileSchema.error) {
    return new Response(400, "Cannot parse data");
  }
  const file = fileSchema.data;

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: file.filename + "-" + Date.now(),
    Body: file.data,
    ContentType: file.type,
  });

  const response = await client.send(command);

  if (response.$metadata.httpStatusCode == 200) {
    return new Response(201, "Upload success!");
  }
  return new Response(400, "Upload fail!");
};

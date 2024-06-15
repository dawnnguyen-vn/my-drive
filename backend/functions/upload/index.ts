import { APIGatewayProxyEvent } from "aws-lambda";
export const handler = async (event: APIGatewayProxyEvent) => {
  console.log("BODY:::", event.body);
};

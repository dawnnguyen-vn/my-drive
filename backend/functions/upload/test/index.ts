import { handler } from "..";
import { APIGatewayProxyEventV2 } from "aws-lambda";

const event: APIGatewayProxyEventV2 = {
  version: "2.0",
  routeKey: "POST /my-drive/upload",
  rawPath: "/my-drive/upload",
  rawQueryString: "",
  headers: {
    accept: "*/*",
    "accept-encoding": "gzip, deflate, br",
    "content-length": "440",
    "content-type":
      "multipart/form-data; boundary=--------------------------578918610856561284590616",
    host: "0hhmudwipl.execute-api.ap-southeast-1.amazonaws.com",
    "user-agent": "Thunder Client (https://www.thunderclient.com)",
    "x-amzn-trace-id": "Root=1-667cf2cd-3195762060a940c863048e28",
    "x-forwarded-for": "115.79.219.34",
    "x-forwarded-port": "443",
    "x-forwarded-proto": "https",
  },
  requestContext: {
    accountId: "642272742271",
    apiId: "0hhmudwipl",
    domainName: "0hhmudwipl.execute-api.ap-southeast-1.amazonaws.com",
    domainPrefix: "0hhmudwipl",
    http: {
      method: "POST",
      path: "/my-drive/upload",
      protocol: "HTTP/1.1",
      sourceIp: "115.79.219.34",
      userAgent: "Thunder Client (https://www.thunderclient.com)",
    },
    requestId: "aArgPiBgyQ0EPyA=",
    routeKey: "POST /my-drive/upload",
    stage: "$default",
    time: "27/Jun/2024:05:04:14 +0000",
    timeEpoch: 1719464654025,
  },
  body: "LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTU3ODkxODYxMDg1NjU2MTI4NDU5MDYxNg0KQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPSJmaWxlIjsgZmlsZW5hbWU9IlNjcmVlbnNob3QgZnJvbSAyMDI0LTA2LTI3IDExLTU5LTA1LnBuZyINCkNvbnRlbnQtVHlwZTogaW1hZ2UvcG5nDQoNColQTkcNChoKAAAADUlIRFIAAAAgAAAADwgGAAAAhYDNFwAAAARzQklUCAgICHwIZIgAAAAZdEVYdFNvZnR3YXJlAGdub21lLXNjcmVlbnNob3TvA78+AAAALXRFWHRDcmVhdGlvbiBUaW1lAFRodSAyNyBKdW4gMjAyNCAxMTo1OTowNSBBTSArMDc/YncQAAAAJUlEQVQ4jWP8H1D0n2EAAdNAWj7qgFEHjDpg1AGjDhh1wKBwAAA8egLeFiakQAAAAABJRU5ErkJggg0KLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTU3ODkxODYxMDg1NjU2MTI4NDU5MDYxNi0tDQo=",
  isBase64Encoded: true,
};
handler(event);

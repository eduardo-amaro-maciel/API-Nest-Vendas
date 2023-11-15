import { LoginPayloadDto } from 'src/auth/dtos/login-payload.dto';
//import { decode } from 'jsonwebtoken';
export const authorizantionToLoginPayload = (
  authorization: string,
): LoginPayloadDto | undefined => {
  const authorizationSplited = authorization.split('.');
  //console.log(decode(authorization)); daria para usar assim
  if (authorizationSplited.length < 3 || !authorizationSplited[1])
    return undefined;

  return JSON.parse(
    Buffer.from(authorizationSplited[1], 'base64').toString('ascii'),
  );
};

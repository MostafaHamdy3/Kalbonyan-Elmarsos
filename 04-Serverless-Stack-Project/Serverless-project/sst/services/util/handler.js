import * as debug from "./debug";

export default function handler(lambda) {
  return async function (event, context) {
    let body, statusCode;

    debug.init(event);

    try {
      body = await lambda(event, context);
      statusCode = 200;
    } catch (e) {
      debug.flush(e);

      body = { error: e.message };
      statusCode = 500;
    }

    return {
      statusCode,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  };
}

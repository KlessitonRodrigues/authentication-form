import * as https from 'https';
import { URL } from 'url';

export const httpPost = (url: string, data: any, headers = {}) => {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(data);
    const parsedUrl = new URL(url);

    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname,
      method: 'POST',
      port: 443,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
        ...headers,
      },
    };

    const req = https.request(options, res => {
      let responseData = '';

      res.on('data', chunk => (responseData += chunk));
      res.on('end', () =>
        resolve({
          statusCode: res.statusCode,
          body: responseData,
        }),
      );
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
};

export const httpGet = (url: string, headers = {}) => {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);

    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'GET',
      port: 443,
      headers: {
        ...headers,
      },
    };

    const req = https.request(options, res => {
      let responseData = '';

      res.on('data', chunk => (responseData += chunk));
      res.on('end', () =>
        resolve({
          statusCode: res.statusCode,
          body: responseData,
        }),
      );
    });

    req.on('error', reject);
    req.end();
  });
};

import https from 'https';

export class ExternalDataLoader {
  // get data from an external source
  static get(url: string): Promise<unknown> {
    return new Promise((resolve, reject) =>
      https.get(url, (res) => {
        let data = '';

        res.on('data', (chunk: string) => {
          data += chunk;
        });

        res
          .on('end', () => {
            try {
              const parsedData = JSON.parse(data);
              resolve(parsedData);
            } catch (err) {
              reject(err);
            }
          })
          .on('error', (err) => {
            reject(err);
          });
      }),
    );
  }
}

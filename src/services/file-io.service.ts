import fs from 'fs/promises';

export class FileIoSevice {
  async writeToFile(file: string, data: string) {
    return await fs.writeFile(file, data).then(() => {
      console.log(`Data successfully written to ${file}`);
    });
  }
}

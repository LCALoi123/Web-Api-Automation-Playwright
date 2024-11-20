import * as fs from 'fs';
import * as path from 'path';

export class Common {
  private static generateRandomString(length = 8): string {
    const characters: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result: string = '';
    const charactersLength: number = characters.length;

    for (let i: number = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  private static getCurrentDate(): string {
    const date: Date = new Date();
    let dd: string | number = date.getDate();
    let mm: number | string = date.getMonth() + 1;
    // console.log(`mm:${mm}`)
    const yyyy: number = date.getFullYear();
    dd = dd <= 9 ? '0' + dd : dd;
    mm = mm === 1 ? '12' : mm <= 9 ? '0' + mm : mm;
    return `${dd}-${mm}-${yyyy}`;
  }

  public static randomInt(input: number): number {
    return Math.floor(Math.random() * input);
  }

  public static randomMinMax(min: number, max: number): number {
    const minCeiled: number = Math.ceil(min);
    const maxFloored: number = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  public static setTextWithTimestamp(lineContent: string): string {
    const now: Date = new Date();
    const timestamp: string = now
      .toISOString()
      .replace('T', ' ')
      .substring(0, 19); // Format: YYYY-MM-DD HH:mm:ss
    return `${timestamp} - ${lineContent}`;
  }

  public static getImageFileName(): string {
    const imageDir: string = path.join(process.cwd(), 'images');
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
    }
    return path.join(
      imageDir,
      `Screenshot-${Common.getCurrentDate()}-${Common.generateRandomString(5)}.png`
    );
  }

  public static getImageFileNameDefault(): string {
    const imageDir: string = path.join(process.cwd(), 'images');
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
    }
    return path.join(
      imageDir,
      `Default-${Common.getCurrentDate()}-${Common.generateRandomString(5)}.png`
    );
  }
}

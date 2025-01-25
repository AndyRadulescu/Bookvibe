export function catchError<T>(promise: Promise<T>): Promise<[undefined, T] | [Error | undefined, undefined]> {
  return promise
    .then((response) => {
      return [undefined, response] as [undefined, T];
    })
    .catch((err) => {
      return [err, undefined] as [Error | undefined, undefined];
    });
}

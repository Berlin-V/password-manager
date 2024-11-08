export function frameResponse(
  status: 'SUCCESS' | 'ERROR',
  message: string,
  data?,
) {
  return {
    status,
    message,
    data,
  };
}

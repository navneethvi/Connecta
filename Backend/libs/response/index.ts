export const successResponse = (
    data: any,
    message: string = 'Success',
    statusCode: number = 200,
  ) => {
    return {
      success: true,
      statusCode,
      message,
      data,
    };
  };
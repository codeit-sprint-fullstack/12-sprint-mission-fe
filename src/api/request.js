export const request = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `HTTP 오류: ${response.status}\n상세 오류: ${errorMessage}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

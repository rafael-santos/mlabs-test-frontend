export default {
  async getAllProfiles() {
    const response = await fetch('https://demo2697181.mockable.io/pages');
    const jsonData = await response.json();

    return jsonData.data;
  }
};

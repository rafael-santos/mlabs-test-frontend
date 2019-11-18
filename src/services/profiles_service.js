export default {
  async getAllProfiles() {
    const response = await fetch('https://demo2697181.mockable.io/pages');
    const jsonData = await response.json();

    return jsonData.data;
  },
  saveConnectedProfile(profile) {
    const connectedProfiles = this.getConnectedProfiles();
    connectedProfiles.push(profile);

    localStorage.setItem('connectedProfiles', JSON.stringify(connectedProfiles));
  },
  getConnectedProfiles() {
    const connectedProfiles = localStorage.getItem('connectedProfiles');

    return JSON.parse(connectedProfiles) || [];
  }
};

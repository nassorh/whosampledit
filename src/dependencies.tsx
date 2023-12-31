import GenuisApiAdapter from "./Adapaters/GeniusAPIAdapter";
import GenuisApi from "./ExternalServices/GenuisApi";

const musicApi = new GenuisApi(process.env.REACT_APP_GENIUS_API_ACCESS_TOKEN)
const apiAdpater = new GenuisApiAdapter(musicApi)

export default apiAdpater;

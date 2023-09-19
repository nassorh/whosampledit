import GenuisApi from "../src/ExternalServices/GenuisApi";
import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

const musicApi = new GenuisApi(process.env.REACT_APP_GENIUS_API_ACCESS_TOKEN)
describe('Genuis Api Tests' , () => {
    it('Should return search values', async () => {
        const response = await musicApi.searchSongs("Sia")
        expect(response).toBeInstanceOf(Array)
    });

    it('Should return null when no values found', async () => {
        try{
            const response = await musicApi.searchSongs("")
        }catch(error : any){
            expect(error.message).toBe("Query is empty");
        }
    });

    it('Should handles spaces', async () => {
        const response = await musicApi.searchSongs("Sia chan")
        expect(response).toBeInstanceOf(Array)
    });
})
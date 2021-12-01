import { get, post } from './http';
import { IUserScore, IQuizConfiguration } from 'interfaces';


export const postUserScore = async (userData: IUserScore): Promise<number> => {
    const endpoint = new URL(
        '/write/user_score/',
        process.env.REACT_APP_GEOQUIZ_BASE_URL
    );
    const config: RequestInit = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    const responseCode = await post<IUserScore, number>(endpoint.toString(), userData, config);
    return responseCode;
};

export const getScoresByQuizConfig = async (
    configuration: IQuizConfiguration
): Promise<Array<IUserScore>> => {
    const endpoint = new URL(
        `scores_by_quiz_type/${configuration.levelOfDifficulty}/${configuration.region}/${configuration.type}`,
        process.env.REACT_APP_GEOQUIZ_BASE_URL
    );
    const response = await get<Array<IUserScore>>(endpoint.toString());
    return response;
};
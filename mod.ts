declare const twitterHandle: string;

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer abc");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
}

export const fetchTweets = async () => {


   // const userId = await getUserId();
    let fetchTweetListUrl = `https://axtnwsqfm7dsral767qn3gmrxa0hbugx.lambda-url.us-east-2.on.aws`;


    const tweetsResponse = await fetch(fetchTweetListUrl, requestOptions).then(response => response.json());
    const response = { data: { tweetsResponse } };
    print(response);

}

// const getUserId = async () => {
//     let cleanedUserId = twitterHandle;
//     if (cleanedUserId.indexOf("@") === 0) {
//         cleanedUserId = twitterHandle.substring(1);
//     }
//     const fetchIdUrl = `https://axtnwsqfm7dsral767qn3gmrxa0hbugx.lambda-url.us-east-2.on.aws`
//     const userInfo = await fetch(fetchIdUrl, requestOptions).then(response => response.json());
//     const userId = userInfo.data.id;
//     return userId;
// }
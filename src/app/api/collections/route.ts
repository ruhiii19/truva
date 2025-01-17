import {NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {

    console.log('WEBFLOW_API_TOKEN:', process.env.WEBFLOW_API_TOKEN);
    // const {searchParams} = new URL(request.url);
    // const collectionId = searchParams.get("collectionId");

    // if (!collectionId) {
    //     return NextResponse.json(
    //     { error: "Missing collectionId parameter" },
    //     { status: 400 }
    //     );
    // }

    //const apiUrl = 'https://api.webflow.com/v2/sites/669cbb5b53bb169b1cdffd16/collections';
    const apiUrl = `https://api.webflow.com/v2/collections/${collectionId}/items`;
    const apiToken = process.env.WEBFLOW_API_TOKEN;

    if(!apiToken) {
        return NextResponse.json({error:"API token is missing"},{status:500})
    }

    try{
        const response = await fetch(apiUrl,{
            method:"GET",
            headers:{
                accept:'application/json',
                Authorization:`Bearer ${apiToken}`
            }
        });

        if(!response.ok){
            const error = await response.json();
            return NextResponse.json({error:error.message || "Failed to fetch data"},{status:response.status});
        }

        const data = await response.json();
        return NextResponse.json(data,{status:200});
    }
    catch(error:any){
        return NextResponse.json({error:error.message||"Unexpected error"},{status:500});
    }

}

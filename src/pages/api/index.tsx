import { NextApiRequest, NextApiResponse } from "next";
import { backendURL } from "../../config";
import axios from 'axios';
export default async function put(
    req: NextApiRequest,
    res: NextApiResponse
) {          
    let {familiarID} = req.query
        await axios.delete(`${backendURL}/Familiar?familiarID=${familiarID}`,  {
            headers:{
                "Custom-Authorization":  JSON.parse(req.cookies["access_token"] || "{}"),
            }})
            .then((response) => {                              
                res.status(response.status).json(response.data);
            })
            .catch((error) => {      
                console.log(error)          
                if (error?.response?.status == 401) {
                    res.status(401)
                        .send({ valido: false, status401: true })
                }
                else if (error?.response?.status == 403) {

                    res.status(403)
                        .send({ valido: false, status403: true })
                }
                else if (error?.response?.status == 400) {

                    res.status(400).json(error?.response?.data?.error[0]);
                }
                else {                   
                    res.status(400).json("Erro inesperado");
                }
            })
      

};

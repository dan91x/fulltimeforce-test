import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios'

@Injectable()
export class RepositoryService {


    async getCommits(){
        try{
            const result = await axios({
                url:"https://api.github.com/repos/dan91x/fulltimeforce-test/commits",
                method:"get",
                headers:{
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })  

            if(result.status===200 && result.data){
                return result.data
            }
            else
                throw new HttpException("API_ERROR",result.status)
        }catch(error){
            throw new HttpException("API_ERROR",500)
        }
    }
}

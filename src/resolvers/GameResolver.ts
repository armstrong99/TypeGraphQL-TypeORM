import { BaseEntity } from "typeorm";
import {Arg, Int, Mutation, Resolver, Query} from 'type-graphql';
import { Game } from "../entity/User";

@Resolver()
export class GameResolver extends BaseEntity {
    @Mutation(() => Boolean)
    async createGame(
        @Arg('myTeamScore', () => Int) myTeamScore: number,
        @Arg('opponentTeamScore', () => Int) opponentTeamScore: number,
        @Arg('date', () => String) date: string,
    ) {
        await Game.insert({myTeamScore, opponentTeamScore, date})
        console.log(myTeamScore)
        return true

    }

    
    
    @Query(() => [Game])
    games() {
        return Game.find()
    }

    @Mutation(() => Boolean)
        async updateGame(
            @Arg('id', () => Int) id:number,
            @Arg('myTeamScore', () => Int) myTeamScore: number,
            @Arg('opponentTeamScore', () => Int) opponentTeamScore: number,
            @Arg('date', () => String) date: string,
        ) {
            await Game.update({id}, {myTeamScore, opponentTeamScore, date})
            return true
        }

    @Mutation(() => Boolean)
        async deleteGame(
            @Arg("id", () => Int) id:number
        ) {
            await Game.delete({id})
            return true
        }

}
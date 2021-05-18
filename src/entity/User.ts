import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}

@ObjectType()
@Entity()
export class Game extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Int)
    @Column('int')
    myTeamScore: number;

    @Field(() => Int)
    @Column()
    opponentTeamScore: number;

    @Field(() => String)
    @Column()
    date: string;
  }

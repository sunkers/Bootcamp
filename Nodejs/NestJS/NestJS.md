## Qu'est-ce que NestJS?
NestJs est un framework pour le dev d'app backend en Node.js. Il utilise TypeScript comme langage de programmation.
Il possède une grande variété de fonctionnalités, comme:
- la gestion de requetes HTTP
- la gestion de la base de données
- l'authentification et la sécurité
- la gestion des erreurs
- les tests unitaires
etc


## Installation de NestJS && Création d'un projet
npm i -g @nestjs/cli
nest new project-name

cd project-name && npm start dev

## Controllers

import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}

> To create a controller using the CLI, run the following command: nest generate controller cats

### DTO = Data Transfer Object

DTOs are objects that define how the data will be sent over the network.

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

## Providers

Providers are classes with a @Injectable() decorator.

import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}

## Modules

Modules are classes with a @Module() decorator.


import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}

## Middleware

Middleware are functions that are called before handling the request.
- execute any code
- make changes to the request and the response objects
- end the request-response cycle
- call the next middleware in the stack

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}

## Exception filters

Exception filters are functions that catch exceptions across the application.

@Get()
async findAll() {
  throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
}

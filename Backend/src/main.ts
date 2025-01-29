import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerSetup } from 'libs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule); 

  const configService = app.get(ConfigService);

  const isProd: boolean = configService.get<string>('ENV') === 'PROD';

  swaggerSetup(app, 'Connecta API Documentation', isProd ? '/app' : undefined)

  await app.listen(configService.get<string>('PORT') ?? 3000);
}
bootstrap();

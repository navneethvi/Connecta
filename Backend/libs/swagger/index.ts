import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerSetup = (
  app: INestApplication,
  title: string,
  service?: string,
) => {
  const path = 'api';

  const swaggerOptions = new DocumentBuilder()
    .setTitle(title)
    .setVersion('1.0')
    .addBearerAuth();

  if (service) {
    swaggerOptions.addServer(service);
  }

  const document = SwaggerModule.createDocument(app, swaggerOptions.build());
  SwaggerModule.setup(path, app, document);
};
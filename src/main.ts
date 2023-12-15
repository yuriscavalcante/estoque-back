import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Signale } from 'signale';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const log = new Signale();
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.use(morgan('dev'));
    app.setGlobalPrefix('/api');
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.listen(process.env.PORT);
    return log
      .scope('Server')
      .success(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    log.scope('Server').error(`Error starting server: ${error.message}`);
  }
}
bootstrap();

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { inventoryBookSchema } from './model/schemas/inventory-book.schema';
import { m2InventoryOpeningSchema } from './model/schemas/m2-inventory-opening.schema';
import { userSchema } from './model/schemas/user.schema';
import { branchSchema } from './model/schemas/branch.schema';
import { m2InventorySchema } from './model/schemas/m2-inventory.schema';

// const URI = 'mongodb+srv://username:password@host/database?retryWrites=true&w=majority';
const URI = 'mongodb://localhost/velavanmedical';
// const URI = 'mongodb://localhost/medical';

@Module({
  imports: [
    MongooseModule.forRoot(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    MongooseModule.forFeature([
      { name: 'InventoryBook', schema: inventoryBookSchema },
      { name: 'M2InventoryOpening', schema: m2InventoryOpeningSchema },
      { name: 'User', schema: userSchema },
      { name: 'Branch', schema: branchSchema },
      { name: 'M2Inventory', schema: m2InventorySchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

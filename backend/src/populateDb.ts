import { getConnection, getRepository } from 'typeorm';

import dbConnection from './database';

import Province from './database/entities/Province';

import dataJSON from './database/data/data.json';

(async () => {
  await dbConnection();

  const provinceRepository = getRepository(Province);

  await provinceRepository.createQueryBuilder().delete().execute();

  await Promise.all(
    dataJSON.provinces.map(async (province) => {
      const provinceToSave = provinceRepository.create({
        name: province.name,
        is_capital: province.name === 'Luanda' ? true : false,
      });

      await provinceRepository.save(provinceToSave);
    })
  );
})();

import { getRepository } from 'typeorm';

import dbConnection from './database';

import Province from './database/entities/Province';
import Municipality from './database/entities/Municipality';
import CommuneDistrict from './database/entities/CommuneDistrict';

import dataJSON from './database/data/data.json';

(async () => {
  await dbConnection();

  const provinceRepository = getRepository(Province);
  const municipalityRepository = getRepository(Municipality);
  const communesDistrictsRepository = getRepository(CommuneDistrict);

  await provinceRepository.createQueryBuilder().delete().execute();
  await municipalityRepository.createQueryBuilder().delete().execute();
  await communesDistrictsRepository.createQueryBuilder().delete().execute();

  try {
    await Promise.all(
      dataJSON.provinces.map(async (province) => {
        const provinceToSave = provinceRepository.create({
          name: province.name,
          code: province.code,
          is_capital: province.name === 'Luanda' ? true : false,
          iso_code: province.iso_code,
        });

        await provinceRepository.save(provinceToSave);

        await Promise.all(
          province.municipalities.map(async (municipality) => {
            const municipalityToSave = municipalityRepository.create({
              name: municipality.name,
              province: provinceToSave,
            });

            await municipalityRepository.save(municipalityToSave);

            municipality.communes_districts.map(
              async (communeDistrict: CommuneDistrict) => {
                const communeDistrictToSave = communesDistrictsRepository.create(
                  {
                    name: communeDistrict.name,
                    municipality: municipalityToSave,
                    type: communeDistrict.type,
                  }
                );

                await communesDistrictsRepository.save(communeDistrictToSave);
              }
            );
          })
        );
      })
    );
  } catch (err) {
    console.log(err);
  }
})();

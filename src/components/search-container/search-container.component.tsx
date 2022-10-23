import React, { useState, useEffect } from 'react'
import ContainerCards from '../containerCards/Container-cards.component'
import Tooltip from '@mui/material/Tooltip';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import './search-container.css';
import { getCollectedCardsFromDb, getDigimon } from '../../services/digimon-service/digimon-service';

const SearchContainer = () => {
  const [form, setForm] = useState<any>({
    name: "",
    number: "",
    rarety: "",
    type: "",
    digytype: "",
    stage: "",
    limit: 50
  });

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getDigimonsAsync({limit: 50});
    getCollectedCardsFromDb();
  }, []);

  const getDigimonsAsync = async (form?: any) => {
    const res = await getDigimon(form);
    console.log(res);
    setData(res);
  }

  const onChange = (event: any) => {

    console.log('Form state', { ...form, [event.target.name]: event.target.value })
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const handleOnClick = (event: any) => {
    event.preventDefault();
    console.log('fomulario:', form)
    getDigimonsAsync(form);
  }
  const handleOnClean = (event: any) => {
    event.preventDefault();
    setForm({
      name: "",
      number: "",
      rarety: "",
      type: "",
      digitype: "",
      stage: "",
      limit: 50
    })
    getDigimonsAsync({
      name: "",
      number: "",
      rarety: "",
      type: "",
      digitype: "",
      stage: "",
      limit: 50
    });
  }
  return (
    <>
      <div className='main-container'>
        {/* <Searcher data={data}/> */}
        <form className='main-container-form'>
          <Input placeholder='Nombre' value={form?.name} className='input' onChange={onChange} name="name" />
          <Input placeholder='Número' value={form?.number} className='input' onChange={onChange} name="number" />
          {/* <Input placeholder='Rareza' value={form?.rarety} className='input' onChange={onChange} name="rarety" /> */}
          <Tooltip title={<select >
            <option>Select Type</option>
            <option>Digimon</option>
            <option>Digi-Egg</option>
            <option>Option</option>
            <option>Tamer</option>
          </select>} placement="top-start">
            <Input placeholder='Tipo' value={form?.type} className='input' onChange={onChange} name="type" />
          </Tooltip>
          <Tooltip title={<select><option>Abnormal</option><option>Aerial Assualt</option><option>Alien</option><option>Alien Humanoid</option><option>Amphibian</option><option>Ancient</option><option>Ancient Animal</option><option>Ancient Bird</option><option>Ancient Birdkin</option><option>Ancient Dragon</option><option>Ancient Dragonkin</option><option>Ancient Fish</option><option>Ancient Holy Warrior</option><option>Ancient Insectoid</option><option>Ancient Mineral</option><option>Ancient Mythical Beast</option><option>Ancient Plant</option><option>Android</option><option>Angel</option><option>Animal</option><option>Ankylosaur</option><option>Aquabeast</option><option>Aquatic</option><option>Archangel</option><option>Armor</option><option>Authority</option><option>Avian</option><option>Baby Dragon</option><option>Base Defense</option><option>Beast</option><option>Beast Dragon</option><option>Beast Knight</option><option>Beastkin</option><option>Bird</option><option>Bird Dragon</option><option>Birdkin</option><option>Blue Flare</option><option>Bulb</option><option>Carnivorous Plant</option><option>Ceratopsian</option><option>Cherub</option><option>Chick</option><option>Composite</option><option>Composition</option><option>CRT</option><option>Crustacean</option><option>Cyborg</option><option>Dark Animal</option><option>Dark Dragon</option><option>Dark Knight</option><option>Dark Warrior</option><option>Data</option><option>Demon</option><option>Demon Dragon</option><option>Demon Lord</option><option>Dinosaur</option><option>Dragon</option><option>Dragon Warrior</option><option>Dragonkin</option><option>Earth Dragon</option><option>Enhancement</option><option>Evil</option><option>Evil Dragon</option><option>Fairy</option><option>Fallen Angel</option><option>Fire</option><option>Fire Dragon</option><option>Flame</option><option>Food</option><option>Four Great Dragons</option><option>General</option><option>Ghost</option><option>Giant Bird</option><option>Holy Beast</option><option>Holy Bird</option><option>Holy Dragon</option><option>Holy Knight</option><option>Holy Sword</option><option>Holy Warrior</option><option>Ice-Snow</option><option>Icy</option><option>Information Gathering</option><option>Insectoid</option><option>Invader</option><option>Larva</option><option>LCD</option><option>Legend-Arms</option><option>Lesser</option><option>Light Dragon</option><option>Machine</option><option>Machine Dragon</option><option>Magic Knight</option><option>Magic Warrior</option><option>Major</option><option>Mammal</option><option>Marine Man</option><option>Mine</option><option>Mineral</option><option>Mini Angel</option><option>Mini Bird</option><option>Mini Dragon</option><option>Minor</option><option>Mollusk</option><option>Monk</option><option>Mother Ship</option><option>Musical Instrument</option><option>Mutant</option><option>Mysterious Beast</option><option>Mysterious Bird</option><option>Mythical</option><option>Mythical Animal</option><option>Mythical Beast</option><option>Mythical Dragon</option><option>NODATA</option><option>Ore</option><option>Parasite</option><option>Perfect</option><option>Pixie</option><option>Plant</option><option>Plesiosaur</option><option>Power Synthesis</option><option>Puppet</option><option>Rare Animal</option><option>Reptile</option><option>Rock</option><option>Rock Dragon</option><option>Royal Knight</option><option>Sea Animal</option><option>Sea Beast</option><option>Seraph</option><option>Shaman</option><option>Skeleton</option><option>Sky Dragon</option><option>Small Dragon</option><option>Spy</option><option>Super Major</option><option>Throne</option><option>Twilight</option><option>Undead</option><option>Unidentified</option><option>Unique</option><option>Unknown</option><option>Vegetation</option><option>Virtue</option><option>Warrior</option><option>Weapon</option><option>Wizard</option><option>X-Antibody</option><option>Xros Heart</option></select>} placement="top-start">
            <Input placeholder='DigiTipo' value={form?.digitype} className='input' onChange={onChange} name="digitype" />
          </Tooltip>
          <Tooltip title={<select>
            <option>Select Stage</option>
            <option>Armor Form</option>
            <option>Baby</option>
            <option>Champion</option>
            <option>D-Reaper</option>
            <option>Hybrid</option>
            <option>In-Training</option>
            <option>Mega</option>
            <option>Rookie</option>
            <option>Ultimate</option>
          </select>} placement="top-start">
            <Input placeholder='Stage' value={form?.stage} className='input' onChange={onChange} name="stage" />
          </Tooltip>
          <Input placeholder='Límite' value={form?.limit} className='input' onChange={onChange} name="limit" />

        </form>
        <div className="button-container">
          <Button size="large" color="primary" onClick={handleOnClick}>
            Buscar
          </Button>
          <Button size="large" color="secondary" onClick={handleOnClean}>
            Limpiar
          </Button>
        </div>
      </div>
      <h2>Cantidad de resultados: {data?.length ?? 0}</h2>
      <ContainerCards data={data} />
    </>
  )
}

export default SearchContainer;
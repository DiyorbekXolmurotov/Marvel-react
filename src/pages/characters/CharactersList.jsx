import { Alert, Grid, LinearProgress } from '@mui/material'
import CharacterCard from '../../components/card/CharacterCard'

export default function CharactersList({ characters, loading, error }) {

    if(loading) return <LinearProgress />

    if(error) return <Alert severity="error">{error.toString()}</Alert>;

  return (
        <Grid container spacing={2}>
        {characters.map((character) => (
        <Grid key={character.id} item xs={12} sm={6} md={3}>
          <CharacterCard 
            id={character.id}
            title={character.name}
            img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        </Grid>
      ))}
    </Grid>
  );
}

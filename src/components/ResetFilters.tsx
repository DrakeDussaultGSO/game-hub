import { Button } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  onResetFilters: () => void;
  gameQuery: GameQuery;
}

function ResetFilters({ onResetFilters, gameQuery }: Props) {
  if (gameQuery?.genre || gameQuery?.platform || gameQuery?.searchText) {
    return <Button onClick={onResetFilters}>Reset Filters</Button>;
  } else {
    return null;
  }
}

export default ResetFilters;

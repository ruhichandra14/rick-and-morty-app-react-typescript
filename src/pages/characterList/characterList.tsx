import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/card/card";
import { useGetCharacterList } from "../../hooks/useGetCharacterList";
import Loading from "../../components/common/loading/loading";
import Error from "../../components/common/error/error";
import "./characterList.css";
import Button from "../../components/common/button/button";
import { NEXT, PREV } from "../../constants/constants";
import { TCharacterProps } from "../../typedefs/typedef";

/*
 *  CharacterList renders the list of characters view/UI
 *  It shows characters list, and pagination component
 */

const CharacterList = () => {
  const { pageId } = useParams();
  const [currentPage, setCurrentPage] = useState<number>(Number(pageId) || 1);

  const { data, isLoading, isError } = useGetCharacterList(
    ["characters", currentPage],
    {
      page: currentPage,
    }
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <section>
      <ul className="character_list">
        {data?.characters?.results?.map((character: TCharacterProps) => (
          <li className="character_listItem" key={character?.id}>
            <Link
              to={`/characters/page/${currentPage}/character/${character.id}`}
              className="character_cardLink"
              key={character?.id}
            >
              <Card cardData={character} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="paginate_btnContainer">
        <Link to={`/characters/page/${currentPage - 1}`}>
          <Button
            name={PREV}
            onClickHandler={() =>
              setCurrentPage((currentPage) => Math.max(currentPage - 1, 0))
            }
            isDisabled={currentPage === 1}
          />
        </Link>
        <span className="current_page"> {currentPage}</span>

        <Link to={`/characters/page/${currentPage + 1}`}>
          <Button
            name={NEXT}
            onClickHandler={() =>
              setCurrentPage((currentPage) => currentPage + 1)
            }
            isDisabled={!data?.characters?.info?.next}
          />
        </Link>
      </div>
    </section>
  );
};

export default CharacterList;

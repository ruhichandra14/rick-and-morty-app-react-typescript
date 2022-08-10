import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/card/card";
import { FEATURED_IN, SHOW_MORE, UNKNOWN } from "../../constants/constants";
import { useGetCharacterDetail } from "../../hooks/useGetCharacterDetail";
import Loading from "../../components/common/loading/loading";
import Error from "../../components/common/error/error";
import "./characterDetails.css";
import { TEpisode } from "../../typedefs/typedef";

/**
 *  CharacterDetail renders the detailed character view/UI
 *  It displays character Card, and episodes list
 *  It has show more episodes functionality (only certain no of Episodes list is intially shown to user) 
 *  CharacterDetail shows loading, error screen as well.
 */

const CharacterDetail = () => {
  const { characterId } = useParams();
  const [showMoreOption, setShowMoreOption] = useState<boolean>(true);
  const [shownEpisodes, setShowEpisodes] = useState<TEpisode[]>([]);
  const { data, isLoading, isError } = useGetCharacterDetail(
    ["characterDetail", characterId],
    Number(characterId) || 0
  );
  const episodes = data?.character?.episode;

  const optimiseEpisode = () => {
    if (episodes?.length > 10) {
      setShowEpisodes(() => episodes.slice(0, 10));
    } else {
      setShowMoreOption(false);
      setShowEpisodes(episodes);
    }
  };

  useEffect(() => {
    if (data?.character?.episode?.length) {
      optimiseEpisode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const showMoreEpisodes = () => {
    const nextEpisodes = episodes.slice(10, episodes.length);
    if (shownEpisodes?.length <= episodes?.length && showMoreOption) {
      setShowEpisodes(shownEpisodes.concat(nextEpisodes));
    }
    setShowMoreOption(false);
  };

  return (
    <section className="character_detail">
      <article className="detail_wrapper">
        <div className="detail_card">
          <Card cardData={data?.character} />
        </div>

        <div className="episode_details_wrapper">
          <h3>{FEATURED_IN(data?.character?.name)}</h3>
          <ul className="episode_list">
            {shownEpisodes?.map((ep: TEpisode) => {
              const {
                id,
                episode = UNKNOWN,
                name = UNKNOWN,
                air_date = UNKNOWN,
              } = ep;
              return <li key={id}>{`${episode} - ${name} - ${air_date}`}</li>;
            })}
          </ul>
          {showMoreOption && (
            <div className="show_more_option" onClick={showMoreEpisodes}>
              {SHOW_MORE}
            </div>
          )}
        </div>
      </article>
    </section>
  );
};

export default CharacterDetail;

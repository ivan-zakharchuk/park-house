import React, {FC} from 'react';
import {
    ContentThirdBlock,
    ContentThirdHeader,
    ContentThirdImageLeft,
    ContentThirdImageLeftBlock,
    ContentThirdImageRight,
    ContentThirdSection, ContentThirdSectionLeft,
    ContentThirdText,
    ContentThirdTextBlock
} from "./ContentThird.styled";
import {Tween} from "react-gsap";
import contentThird1 from "../../assets/images/contentThird1.png";
import contentThird2 from "../../assets/images/contentThird2.png";

const ContentThird: FC = ({currentProgress, nextProgress}) => {
    // console.log('progress', progress);
    return (
        <ContentThirdBlock>
            <ContentThirdSectionLeft>
                <Tween
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                    paused
                    totalProgress={currentProgress}
                >
                    <ContentThirdImageLeftBlock currentProgress={currentProgress}>
                        <ContentThirdImageLeft src={contentThird1}/>
                    </ContentThirdImageLeftBlock>

                </Tween>

                <Tween
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                    paused
                    totalProgress={currentProgress}
                >
                    <ContentThirdTextBlock>
                        <ContentThirdHeader>
                            Lorem ipsum dolor sit amet
                        </ContentThirdHeader>
                        <ContentThirdText>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                        </ContentThirdText>
                    </ContentThirdTextBlock>
                </Tween>

            </ContentThirdSectionLeft>
            <Tween
                from={{opacity: 0}}
                to={{opacity: 1}}
                paused
                totalProgress={currentProgress}
            >
                <ContentThirdSection>
                    <ContentThirdImageRight src={contentThird2}/>
                </ContentThirdSection>
            </Tween>

        </ContentThirdBlock>
    )

}

export default ContentThird;
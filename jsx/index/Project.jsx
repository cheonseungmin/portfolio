import React from 'react';
import styledComponents from 'styled-components';

import ProjectToken from './ProjectToken.jsx';

const Wrapper = styledComponents.div`
    width: 100%;
    padding: 50px 20px;
    flex: 1px;
    margin: 0 auto;
    box-sizing: border-box;
`

const Grid = styledComponents.div`
    display: grid;
    grid-gap: 35px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: repeat(1, 300px);
`

const Project = () => {

    return (
        <Wrapper>
            <Grid>
                <ProjectToken 
                    url={'../img/index/1.png'}
                    name={'문도 피구'}
                    text={'React로 구현한 실시간 1:1 웹 슈팅 게임'}
                />
                <ProjectToken 
                    url={'../img/index/2.png'}
                    name={'무비 리뷰'}
                    text={'사이킷런 학습 모델을 통한 리뷰 텍스트 분류'}
                />
            </Grid>
        </Wrapper>
    )
}

export default Project;
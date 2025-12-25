import Flex from "../common/components/Flex.tsx";
import Text from "../common/components/Text.tsx";

export default function ExComponentScreen() {
    return <div style={{width: "100%", height: "100%"}}>
        {/*넓이 500px, height 100px인 구역*/}
        <Flex width={500} height={100} style={{backgroundColor: "orange"}}></Flex>

        {/*아래처럼 "100%" 이런식으로도 가능. px인 경우만 숫자 넣기.*/}
        <Flex width={"100%"} height={300} style={{backgroundColor: "#d4d4d4"}}>
            {/*row : 아래처럼 넣으면 가로로 정렬됨.*/}
            {/*gap : 아래처럼 넣으면 Flex안에 있는 것들의 사이 간격이 40px이 됨.*/}
            <Flex width={500} height={100} row gap={40} style={{backgroundColor: "#ffc6c6"}}>
                <Text fontSize={24} fontWeight={300}>20px에 얇은 글씨</Text>
                <Text fontSize={14} fontWeight={700}>14px에 두꺼운 글씨</Text>
            </Flex>
        </Flex>

        <Flex width={"100%"} height={100} gap={10} row style={{backgroundColor: "#f2fda6"}}>
            <Flex width={80} height={80} center style={{backgroundColor: "#c2cd76"}}>
                가운데
            </Flex>
            <Flex width={120} height={80} verticalCenter style={{backgroundColor: "#c2cd76"}}>
                {/*verticalBottom(아래 정렬), verticalTop(위로 정렬)*/}
                y축 가운데
            </Flex>
            <Flex width={120} height={80} horizontalCenter style={{backgroundColor: "#c2cd76"}}>
                {/*horizontalStart(왼쪽 정렬), horizontalEnd(오른쪽 정렬)*/}
                x축 가운데
            </Flex>
            {/* 이런식으로 하나만 쓰인 경우 true, false로 지정 가능. ex) verticalCenter={true} */}
            <Flex width={120} height={80} center={true} style={{backgroundColor: "#c2cd76"}}>true</Flex>
            <Flex width={120} height={80} center={false} style={{backgroundColor: "#c2cd76"}}>false</Flex>
        </Flex>

        {/*spaceBetween: 양 끝으로 정렬*/}
        {/*row 있는경우 width인 50%에 맞춰 정렬*/}
        <Flex width={"50%"} height={100} spaceBetween style={{backgroundColor: "#b6fda6"}}>
            <Text fontSize={30}>1</Text>
            <Text fontSize={30}>2</Text>
        </Flex>
        {/*row 없는경우 height인 200px에 맞춰 정렬*/}
        <Flex width={"50%"} height={100} row spaceBetween style={{backgroundColor: "#89c67b"}}>
            <Text fontSize={30}>1</Text>
            <Text fontSize={30}>2</Text>
            <Text fontSize={30}>3</Text>
            <Text fontSize={30}>4</Text>
        </Flex>
    </div>
}
import { Flex } from "@mantine/core"
import "./index.css"
import { Card } from "../../../../components/card"
import { useVacancy } from "../../../../core/vacancies/useVacancy"

const Vacancy = () => {
  //const {id} = 
  const {data: vacancy, isLoading} = useVacancy(id);
  return(
    <Flex>
      <Card></Card>
      <Flex>

      </Flex>
    </Flex>
  )
}

export {Vacancy}
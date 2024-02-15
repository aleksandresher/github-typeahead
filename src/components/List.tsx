import { useQuery } from "react-query";
import { useContext } from "react";
import { MyContext } from "../context/Provider";

const List = () => {
  const { myData, updateData } = useContext(MyContext);

  const baseUrl = "https://api.github.com";

  const { isLoading, isError } = useQuery({
    queryKey: ["users", myData.user],
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/search/users?q=${myData.user}`);
      const data = await response.json();
      updateData({ fetchedData: data });
      return data;
    },
    enabled: !!myData.user,
  });

  return (
    <div>
      {isLoading && <p>loading</p>}
      {isError && <p>error</p>}
      {/* {myData?.fetchedData?.items?.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.login}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default List;

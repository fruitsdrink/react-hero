import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { wait } from "@/utils/timer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const queryKey = "day002_posts";

const Page = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: async (): Promise<Post[]> => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      await wait();
      return res.json();
    }
    //gcTime: 10_000
    // staleTime: 10_000, // 超过10后且触发了条件后重新获取数据， 触发条件为窗口重新获取焦点、重新连接网络、手动触发
    // refetchInterval: 10_000 // 每10秒重新获取数据
  });

  const { mutate, isError, isPending } = useMutation({
    mutationFn: async (newPost: Omit<Post, "id">) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });

      const data = res.json();
      console.log("add post res: ", data);
      return data;
    },
    onSuccess: (newPost) => {
      // refetch the data
      // queryClient.invalidateQueries({
      //   queryKey: [queryKey]
      // });

      // update the cache， 乐观更新
      queryClient.setQueryData([queryKey], (oldData: Post[] | undefined) => {
        return oldData
          ? [{ ...newPost, id: oldData.length + 1 }, ...oldData]
          : [];
      });
    }
  });

  if (error) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        Error: {error.message ?? "There was an error!"}
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="mb-8 space-y-2">
          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input placeholder="Body" onChange={(e) => setBody(e.target.value)} />
        </div>
        <Button
          disabled={isPending}
          onClick={() => {
            if (!title || !body) return;
            mutate({
              userId: 1,
              title,
              body
            });
          }}
        >
          {isPending ? "Adding Post..." : "Add Post"}
        </Button>
        {isError && (
          <div className="text-red-500">Error: Failed to add post</div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {data?.map((post) => {
          return (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>
                  #{post.id} {post.title}
                </CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>

              <CardContent>{post.body}</CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Page;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

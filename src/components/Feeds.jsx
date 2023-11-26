import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import { Users } from "../dummyData";

const Feeds = () => {
  return (
    <Box p={2} flex={4}>
      {Users.map((elm) => (
        <Post
          key={elm.id}
          img={elm.profilePicture}
          name={elm.username}
          date={elm.date}
          postimg={elm.postPicture}
        />
      ))}
    </Box>
  );
};

export default Feeds;

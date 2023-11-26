import React from "react";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = ({ key, img, name, date, postimg }) => {
  return (
    <Card sx={{ m: 3 }}>
      <CardHeader
        avatar={<Avatar src={img} aria-label="recipe"></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia component="img" height="250" image={postimg} alt={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="bookmark">
          <Checkbox
            icon={<BookmarkBorder />}
            checkedIcon={<Bookmark sx={{ color: "orange" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Checkbox icon={<Share />} checkedIcon={<Share />} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;

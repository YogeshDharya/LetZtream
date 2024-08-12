
# **LetzStream** Video Streaming Application  

A brief description of what this project does and who it's for

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```



## API Reference

#### Get all items

```http

  GET /v1/videos/:videoId
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Video

#### POST Video
```http 
  POST /v1/videos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `videoLink`      | `string` | `Required to Fetch the video` |
|`title`|`string`   |`Video Title` 
|`genre`|`string`|`Video Genre`
|`contentRating`| `string`|`Video Content Rating`
|`releaseDate`|`string`| `Video Release Date`
|`previewImage`|`string`|`Video Thumbnail`

### PATCH Video 

```http
  PATCH /v1/videos/:${id}/${votes}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `vote`      | `string` | `upVote/DownVote `|
|`change`|`string`|`Increase/Decrease `|

```http 
  PATCH /v1/videos/:${videoId}/${views}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `views`      | `string` | `view Count increases by 1`


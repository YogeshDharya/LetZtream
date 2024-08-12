
# **LetzStream** Video Streaming Application  

A brief description of what this project does and who it's for


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
| `vote`      | `string` | `Vote Count`
|`change`|`string`|`Either Increase/Decrease depending on UpVotes or Downvotes`

```http 
  PATCH /v1/videos/:${videoId}/

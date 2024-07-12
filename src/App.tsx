import { Avatar, Box, Popover, Typography } from "@mui/material"
import { useState } from "react"

function App() {
  return (
    <AvatarPopover
      avatarUrl="https://www.w3schools.com/howto/img_avatar.png"
      details={{
        name: "SomeName",
        age: 55,
        email: "someemail@email.com",
        phoneNumber: "9480344398"
      }}
    />
  )
}

function AvatarPopover(props: {
  avatarUrl: string,
  details: {
    name: string,
    age: number,
    email: string,
    phoneNumber: string
  }
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>()
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Avatar onClick={(e) => setAnchorEl(e.currentTarget)} src={props.avatarUrl}>
        Open Popover
      </Avatar>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(undefined)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", p: 3, height: "400px", width: "250px", gap: 2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={props.avatarUrl} sx={{ width: "5rem", height: "5rem" }}></Avatar>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <Typography fontSize="1.3rem">{props.details.name}</Typography>
              <Typography fontSize="1.1rem">{props.details.age} years old</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", p: 1.5, backgroundColor: "#33333333", borderRadius: "5px", flexGrow: 1, gap: 1 }}>
            <Typography fontSize="1.3rem" sx={{fontWeight: "600", color: "#444"}}>Contact Info:</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", p: 1, gap: 1.5 }}>
              <Box sx={{display: "flex", flexDirection: "column", gap: 0.5}}>
                <Typography fontSize="1.1rem" sx={{ fontWeight: "600", color: "#444" }}>EMAIL</Typography>
                <Typography fontSize="1.1rem">{props.details.email}</Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "column", gap: 0.5}}>
                <Typography fontSize="1.1rem" sx={{ fontWeight: "600", color: "#444" }}>PHONE NUMBER</Typography>
                <Typography fontSize="1.1rem">{props.details.phoneNumber}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  )
}

export default App

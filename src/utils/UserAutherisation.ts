import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";

export interface UserAuthorisation {
  isAuthorized: boolean;
  userId: String | null;
  role: string | null;
}

const UserAuthorisation = async (
  req: NextRequest
): Promise<UserAuthorisation> => {
  let isAuthorized = false;
  let userId: string | null = null;
  let role: string | null = null;

  try {
    const token = req.cookies.get("jwt")?.value;

    if (token) {
      const decodedToken = jwt.decode(token) as {
        userId: string;
        role: string;
      } | null;

      if (
        decodedToken &&
        typeof decodedToken === "object" &&
        "role" in decodedToken &&
        "userId" in decodedToken
      ) {
        isAuthorized = true;
        userId = decodedToken.userId;
        role = decodedToken.role;
        
      } else {
        console.error("Invalid or missing role in decoded token");
        throw new Error("Invalid or missing role in decoded token");
      }
    }
  } catch (error) {
    isAuthorized = false;
    (userId = null), (role = null);
  }

  return {
    isAuthorized,
    userId,
    role,
  };
};

export default UserAuthorisation;

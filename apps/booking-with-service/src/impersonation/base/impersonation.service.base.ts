/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Impersonation as PrismaImpersonation,
  User as PrismaUser,
} from "@prisma/client";

export class ImpersonationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ImpersonationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.impersonation.count(args);
  }

  async impersonations<T extends Prisma.ImpersonationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImpersonationFindManyArgs>
  ): Promise<PrismaImpersonation[]> {
    return this.prisma.impersonation.findMany<Prisma.ImpersonationFindManyArgs>(
      args
    );
  }
  async impersonation<T extends Prisma.ImpersonationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImpersonationFindUniqueArgs>
  ): Promise<PrismaImpersonation | null> {
    return this.prisma.impersonation.findUnique(args);
  }
  async createImpersonation<T extends Prisma.ImpersonationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImpersonationCreateArgs>
  ): Promise<PrismaImpersonation> {
    return this.prisma.impersonation.create<T>(args);
  }
  async updateImpersonation<T extends Prisma.ImpersonationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImpersonationUpdateArgs>
  ): Promise<PrismaImpersonation> {
    return this.prisma.impersonation.update<T>(args);
  }
  async deleteImpersonation<T extends Prisma.ImpersonationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImpersonationDeleteArgs>
  ): Promise<PrismaImpersonation> {
    return this.prisma.impersonation.delete(args);
  }

  async getImpersonatedBy(parentId: number): Promise<PrismaUser | null> {
    return this.prisma.impersonation
      .findUnique({
        where: { id: parentId },
      })
      .impersonatedBy();
  }

  async getImpersonatedUser(parentId: number): Promise<PrismaUser | null> {
    return this.prisma.impersonation
      .findUnique({
        where: { id: parentId },
      })
      .impersonatedUser();
  }
}

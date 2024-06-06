import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CampaignReportController } from "../campaignReport.controller";
import { CampaignReportService } from "../campaignReport.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bounceCount: 42,
  clickCount: 42,
  createdAt: new Date(),
  id: "exampleId",
  openCount: 42,
  sentCount: 42,
  spamCount: 42,
  unsubscribedCount: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  bounceCount: 42,
  clickCount: 42,
  createdAt: new Date(),
  id: "exampleId",
  openCount: 42,
  sentCount: 42,
  spamCount: 42,
  unsubscribedCount: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    bounceCount: 42,
    clickCount: 42,
    createdAt: new Date(),
    id: "exampleId",
    openCount: 42,
    sentCount: 42,
    spamCount: 42,
    unsubscribedCount: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  bounceCount: 42,
  clickCount: 42,
  createdAt: new Date(),
  id: "exampleId",
  openCount: 42,
  sentCount: 42,
  spamCount: 42,
  unsubscribedCount: 42,
  updatedAt: new Date(),
};

const service = {
  createCampaignReport() {
    return CREATE_RESULT;
  },
  campaignReports: () => FIND_MANY_RESULT,
  campaignReport: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("CampaignReport", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CampaignReportService,
          useValue: service,
        },
      ],
      controllers: [CampaignReportController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /campaignReports", async () => {
    await request(app.getHttpServer())
      .post("/campaignReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /campaignReports", async () => {
    await request(app.getHttpServer())
      .get("/campaignReports")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /campaignReports/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/campaignReports"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /campaignReports/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/campaignReports"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /campaignReports existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/campaignReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/campaignReports")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
